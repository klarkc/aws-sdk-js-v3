"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QLDB = void 0;
const QLDBClient_1 = require("./QLDBClient");
const CancelJournalKinesisStreamCommand_1 = require("./commands/CancelJournalKinesisStreamCommand");
const CreateLedgerCommand_1 = require("./commands/CreateLedgerCommand");
const DeleteLedgerCommand_1 = require("./commands/DeleteLedgerCommand");
const DescribeJournalKinesisStreamCommand_1 = require("./commands/DescribeJournalKinesisStreamCommand");
const DescribeJournalS3ExportCommand_1 = require("./commands/DescribeJournalS3ExportCommand");
const DescribeLedgerCommand_1 = require("./commands/DescribeLedgerCommand");
const ExportJournalToS3Command_1 = require("./commands/ExportJournalToS3Command");
const GetBlockCommand_1 = require("./commands/GetBlockCommand");
const GetDigestCommand_1 = require("./commands/GetDigestCommand");
const GetRevisionCommand_1 = require("./commands/GetRevisionCommand");
const ListJournalKinesisStreamsForLedgerCommand_1 = require("./commands/ListJournalKinesisStreamsForLedgerCommand");
const ListJournalS3ExportsCommand_1 = require("./commands/ListJournalS3ExportsCommand");
const ListJournalS3ExportsForLedgerCommand_1 = require("./commands/ListJournalS3ExportsForLedgerCommand");
const ListLedgersCommand_1 = require("./commands/ListLedgersCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const StreamJournalToKinesisCommand_1 = require("./commands/StreamJournalToKinesisCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateLedgerCommand_1 = require("./commands/UpdateLedgerCommand");
const UpdateLedgerPermissionsModeCommand_1 = require("./commands/UpdateLedgerPermissionsModeCommand");
/**
 * <p>The control plane for Amazon QLDB</p>
 */
class QLDB extends QLDBClient_1.QLDBClient {
    cancelJournalKinesisStream(args, optionsOrCb, cb) {
        const command = new CancelJournalKinesisStreamCommand_1.CancelJournalKinesisStreamCommand(args);
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
    createLedger(args, optionsOrCb, cb) {
        const command = new CreateLedgerCommand_1.CreateLedgerCommand(args);
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
    deleteLedger(args, optionsOrCb, cb) {
        const command = new DeleteLedgerCommand_1.DeleteLedgerCommand(args);
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
    describeJournalKinesisStream(args, optionsOrCb, cb) {
        const command = new DescribeJournalKinesisStreamCommand_1.DescribeJournalKinesisStreamCommand(args);
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
    describeJournalS3Export(args, optionsOrCb, cb) {
        const command = new DescribeJournalS3ExportCommand_1.DescribeJournalS3ExportCommand(args);
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
    describeLedger(args, optionsOrCb, cb) {
        const command = new DescribeLedgerCommand_1.DescribeLedgerCommand(args);
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
    exportJournalToS3(args, optionsOrCb, cb) {
        const command = new ExportJournalToS3Command_1.ExportJournalToS3Command(args);
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
    getBlock(args, optionsOrCb, cb) {
        const command = new GetBlockCommand_1.GetBlockCommand(args);
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
    getDigest(args, optionsOrCb, cb) {
        const command = new GetDigestCommand_1.GetDigestCommand(args);
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
    getRevision(args, optionsOrCb, cb) {
        const command = new GetRevisionCommand_1.GetRevisionCommand(args);
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
    listJournalKinesisStreamsForLedger(args, optionsOrCb, cb) {
        const command = new ListJournalKinesisStreamsForLedgerCommand_1.ListJournalKinesisStreamsForLedgerCommand(args);
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
    listJournalS3Exports(args, optionsOrCb, cb) {
        const command = new ListJournalS3ExportsCommand_1.ListJournalS3ExportsCommand(args);
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
    listJournalS3ExportsForLedger(args, optionsOrCb, cb) {
        const command = new ListJournalS3ExportsForLedgerCommand_1.ListJournalS3ExportsForLedgerCommand(args);
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
    listLedgers(args, optionsOrCb, cb) {
        const command = new ListLedgersCommand_1.ListLedgersCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    streamJournalToKinesis(args, optionsOrCb, cb) {
        const command = new StreamJournalToKinesisCommand_1.StreamJournalToKinesisCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
    updateLedger(args, optionsOrCb, cb) {
        const command = new UpdateLedgerCommand_1.UpdateLedgerCommand(args);
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
    updateLedgerPermissionsMode(args, optionsOrCb, cb) {
        const command = new UpdateLedgerPermissionsModeCommand_1.UpdateLedgerPermissionsModeCommand(args);
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
exports.QLDB = QLDB;
//# sourceMappingURL=QLDB.js.map