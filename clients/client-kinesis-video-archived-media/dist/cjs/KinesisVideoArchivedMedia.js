"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KinesisVideoArchivedMedia = void 0;
const KinesisVideoArchivedMediaClient_1 = require("./KinesisVideoArchivedMediaClient");
const GetClipCommand_1 = require("./commands/GetClipCommand");
const GetDASHStreamingSessionURLCommand_1 = require("./commands/GetDASHStreamingSessionURLCommand");
const GetHLSStreamingSessionURLCommand_1 = require("./commands/GetHLSStreamingSessionURLCommand");
const GetMediaForFragmentListCommand_1 = require("./commands/GetMediaForFragmentListCommand");
const ListFragmentsCommand_1 = require("./commands/ListFragmentsCommand");
/**
 * <p></p>
 */
class KinesisVideoArchivedMedia extends KinesisVideoArchivedMediaClient_1.KinesisVideoArchivedMediaClient {
    getClip(args, optionsOrCb, cb) {
        const command = new GetClipCommand_1.GetClipCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDASHStreamingSessionURL(args, optionsOrCb, cb) {
        const command = new GetDASHStreamingSessionURLCommand_1.GetDASHStreamingSessionURLCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getHLSStreamingSessionURL(args, optionsOrCb, cb) {
        const command = new GetHLSStreamingSessionURLCommand_1.GetHLSStreamingSessionURLCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMediaForFragmentList(args, optionsOrCb, cb) {
        const command = new GetMediaForFragmentListCommand_1.GetMediaForFragmentListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFragments(args, optionsOrCb, cb) {
        const command = new ListFragmentsCommand_1.ListFragmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.KinesisVideoArchivedMedia = KinesisVideoArchivedMedia;
//# sourceMappingURL=KinesisVideoArchivedMedia.js.map