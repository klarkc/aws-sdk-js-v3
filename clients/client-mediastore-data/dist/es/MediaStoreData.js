import { __extends } from "tslib";
import { MediaStoreDataClient } from "./MediaStoreDataClient";
import { DeleteObjectCommand, } from "./commands/DeleteObjectCommand";
import { DescribeObjectCommand, } from "./commands/DescribeObjectCommand";
import { GetObjectCommand } from "./commands/GetObjectCommand";
import { ListItemsCommand } from "./commands/ListItemsCommand";
import { PutObjectCommand } from "./commands/PutObjectCommand";
/**
 * <p>An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3
 *          service. Objects are the fundamental entities that are stored in AWS Elemental
 *          MediaStore.</p>
 */
var MediaStoreData = /** @class */ (function (_super) {
    __extends(MediaStoreData, _super);
    function MediaStoreData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaStoreData.prototype.deleteObject = function (args, optionsOrCb, cb) {
        var command = new DeleteObjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaStoreData.prototype.describeObject = function (args, optionsOrCb, cb) {
        var command = new DescribeObjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaStoreData.prototype.getObject = function (args, optionsOrCb, cb) {
        var command = new GetObjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaStoreData.prototype.listItems = function (args, optionsOrCb, cb) {
        var command = new ListItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaStoreData.prototype.putObject = function (args, optionsOrCb, cb) {
        var command = new PutObjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return MediaStoreData;
}(MediaStoreDataClient));
export { MediaStoreData };
//# sourceMappingURL=MediaStoreData.js.map