import { __extends } from "tslib";
import { QLDBClient } from "./QLDBClient";
import { CancelJournalKinesisStreamCommand, } from "./commands/CancelJournalKinesisStreamCommand";
import { CreateLedgerCommand, } from "./commands/CreateLedgerCommand";
import { DeleteLedgerCommand, } from "./commands/DeleteLedgerCommand";
import { DescribeJournalKinesisStreamCommand, } from "./commands/DescribeJournalKinesisStreamCommand";
import { DescribeJournalS3ExportCommand, } from "./commands/DescribeJournalS3ExportCommand";
import { DescribeLedgerCommand, } from "./commands/DescribeLedgerCommand";
import { ExportJournalToS3Command, } from "./commands/ExportJournalToS3Command";
import { GetBlockCommand } from "./commands/GetBlockCommand";
import { GetDigestCommand } from "./commands/GetDigestCommand";
import { GetRevisionCommand } from "./commands/GetRevisionCommand";
import { ListJournalKinesisStreamsForLedgerCommand, } from "./commands/ListJournalKinesisStreamsForLedgerCommand";
import { ListJournalS3ExportsCommand, } from "./commands/ListJournalS3ExportsCommand";
import { ListJournalS3ExportsForLedgerCommand, } from "./commands/ListJournalS3ExportsForLedgerCommand";
import { ListLedgersCommand } from "./commands/ListLedgersCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { StreamJournalToKinesisCommand, } from "./commands/StreamJournalToKinesisCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateLedgerCommand, } from "./commands/UpdateLedgerCommand";
import { UpdateLedgerPermissionsModeCommand, } from "./commands/UpdateLedgerPermissionsModeCommand";
/**
 * <p>The control plane for Amazon QLDB</p>
 */
var QLDB = /** @class */ (function (_super) {
    __extends(QLDB, _super);
    function QLDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QLDB.prototype.cancelJournalKinesisStream = function (args, optionsOrCb, cb) {
        var command = new CancelJournalKinesisStreamCommand(args);
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
    QLDB.prototype.createLedger = function (args, optionsOrCb, cb) {
        var command = new CreateLedgerCommand(args);
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
    QLDB.prototype.deleteLedger = function (args, optionsOrCb, cb) {
        var command = new DeleteLedgerCommand(args);
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
    QLDB.prototype.describeJournalKinesisStream = function (args, optionsOrCb, cb) {
        var command = new DescribeJournalKinesisStreamCommand(args);
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
    QLDB.prototype.describeJournalS3Export = function (args, optionsOrCb, cb) {
        var command = new DescribeJournalS3ExportCommand(args);
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
    QLDB.prototype.describeLedger = function (args, optionsOrCb, cb) {
        var command = new DescribeLedgerCommand(args);
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
    QLDB.prototype.exportJournalToS3 = function (args, optionsOrCb, cb) {
        var command = new ExportJournalToS3Command(args);
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
    QLDB.prototype.getBlock = function (args, optionsOrCb, cb) {
        var command = new GetBlockCommand(args);
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
    QLDB.prototype.getDigest = function (args, optionsOrCb, cb) {
        var command = new GetDigestCommand(args);
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
    QLDB.prototype.getRevision = function (args, optionsOrCb, cb) {
        var command = new GetRevisionCommand(args);
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
    QLDB.prototype.listJournalKinesisStreamsForLedger = function (args, optionsOrCb, cb) {
        var command = new ListJournalKinesisStreamsForLedgerCommand(args);
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
    QLDB.prototype.listJournalS3Exports = function (args, optionsOrCb, cb) {
        var command = new ListJournalS3ExportsCommand(args);
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
    QLDB.prototype.listJournalS3ExportsForLedger = function (args, optionsOrCb, cb) {
        var command = new ListJournalS3ExportsForLedgerCommand(args);
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
    QLDB.prototype.listLedgers = function (args, optionsOrCb, cb) {
        var command = new ListLedgersCommand(args);
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
    QLDB.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
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
    QLDB.prototype.streamJournalToKinesis = function (args, optionsOrCb, cb) {
        var command = new StreamJournalToKinesisCommand(args);
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
    QLDB.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
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
    QLDB.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
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
    QLDB.prototype.updateLedger = function (args, optionsOrCb, cb) {
        var command = new UpdateLedgerCommand(args);
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
    QLDB.prototype.updateLedgerPermissionsMode = function (args, optionsOrCb, cb) {
        var command = new UpdateLedgerPermissionsModeCommand(args);
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
    return QLDB;
}(QLDBClient));
export { QLDB };
//# sourceMappingURL=QLDB.js.map