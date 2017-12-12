import { Message } from "./message.model";
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class MessageService {
  private messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>();

  constructor(private http: Http, private errorService: ErrorService) {}

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    const token = localStorage.getItem("token")
      ? "?token=" + localStorage.getItem("token")
      : "";
    return this.http
      .post("https://angular2-app-message.herokuapp.com/message" + token, body, { headers: headers })
      .map((response: Response) => {
        const result = response.json();
        const message = new Message(
          result.data.content,
          result.data.user.firstName,
          result.data._id,
          result.data.user._id
        );
        this.messages.push(message);
        return message;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }

  getMessages() {
    return this.http
      .get("https://angular2-app-message.herokuapp.com/message")
      .map((response: Response) => {
        const messages = response.json().data;
        let transformedMessages: Message[] = [];

        for (let message of messages) {
          transformedMessages.push(
            new Message(
              message.content,
              message.user.firstName,
              message._id,
              message.user._id
            )
          );
        }

        this.messages = transformedMessages;
        return transformedMessages;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMesasge(message: Message) {
    const token = localStorage.getItem("token")
      ? "?token=" + localStorage.getItem("token")
      : "";
    const body = JSON.stringify(message);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http
      .patch(
        "https://angular2-app-message.herokuapp.com/message/" + message.messageId + token,
        body,
        {
          headers: headers
        }
      )
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }
  deleteMessage(message) {
    this.messages.splice(this.messages.indexOf(message), 1);
    const token = localStorage.getItem("token")
      ? "?token=" + localStorage.getItem("token")
      : "";

    return this.http
      .delete("https://angular2-app-message.herokuapp.com/message/" + message.messageId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }
}
