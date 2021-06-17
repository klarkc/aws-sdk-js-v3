"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaStoreData = void 0;
const MediaStoreDataClient_1 = require("./MediaStoreDataClient");
const DeleteObjectCommand_1 = require("./commands/DeleteObjectCommand");
const DescribeObjectCommand_1 = require("./commands/DescribeObjectCommand");
const GetObjectCommand_1 = require("./commands/GetObjectCommand");
const ListItemsCommand_1 = require("./commands/ListItemsCommand");
const PutObjectCommand_1 = require("./commands/PutObjectCommand");
/**
 * <p>An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3
 *          service. Objects are the fundamental entities that are stored in AWS Elemental
 *          MediaStore.</p>
 */
class MediaStoreData extends MediaStoreDataClient_1.MediaStoreDataClient {
    deleteObject(args, optionsOrCb, cb) {
        const command = new DeleteObjectCommand_1.DeleteObjectCommand(args);
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
    describeObject(args, optionsOrCb, cb) {
        const command = new DescribeObjectCommand_1.DescribeObjectCommand(args);
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
    getObject(args, optionsOrCb, cb) {
        const command = new GetObjectCommand_1.GetObjectCommand(args);
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
    listItems(args, optionsOrCb, cb) {
        const command = new ListItemsCommand_1.ListItemsCommand(args);
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
    putObject(args, optionsOrCb, cb) {
        const command = new PutObjectCommand_1.PutObjectCommand(args);
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
exports.MediaStoreData = MediaStoreData;
//# sourceMappingURL=MediaStoreData.js.map