"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoTEventsData = void 0;
const IoTEventsDataClient_1 = require("./IoTEventsDataClient");
const BatchAcknowledgeAlarmCommand_1 = require("./commands/BatchAcknowledgeAlarmCommand");
const BatchDisableAlarmCommand_1 = require("./commands/BatchDisableAlarmCommand");
const BatchEnableAlarmCommand_1 = require("./commands/BatchEnableAlarmCommand");
const BatchPutMessageCommand_1 = require("./commands/BatchPutMessageCommand");
const BatchResetAlarmCommand_1 = require("./commands/BatchResetAlarmCommand");
const BatchSnoozeAlarmCommand_1 = require("./commands/BatchSnoozeAlarmCommand");
const BatchUpdateDetectorCommand_1 = require("./commands/BatchUpdateDetectorCommand");
const DescribeAlarmCommand_1 = require("./commands/DescribeAlarmCommand");
const DescribeDetectorCommand_1 = require("./commands/DescribeDetectorCommand");
const ListAlarmsCommand_1 = require("./commands/ListAlarmsCommand");
const ListDetectorsCommand_1 = require("./commands/ListDetectorsCommand");
/**
 * <p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and
 *       triggers actions when such events occur. You can use AWS IoT Events Data API commands to send inputs to
 *       detectors, list detectors, and view or update a detector's status.</p>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is AWS IoT Events?</a> in the
 *         <i>AWS IoT Events Developer Guide</i>.</p>
 */
class IoTEventsData extends IoTEventsDataClient_1.IoTEventsDataClient {
    batchAcknowledgeAlarm(args, optionsOrCb, cb) {
        const command = new BatchAcknowledgeAlarmCommand_1.BatchAcknowledgeAlarmCommand(args);
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
    batchDisableAlarm(args, optionsOrCb, cb) {
        const command = new BatchDisableAlarmCommand_1.BatchDisableAlarmCommand(args);
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
    batchEnableAlarm(args, optionsOrCb, cb) {
        const command = new BatchEnableAlarmCommand_1.BatchEnableAlarmCommand(args);
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
    batchPutMessage(args, optionsOrCb, cb) {
        const command = new BatchPutMessageCommand_1.BatchPutMessageCommand(args);
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
    batchResetAlarm(args, optionsOrCb, cb) {
        const command = new BatchResetAlarmCommand_1.BatchResetAlarmCommand(args);
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
    batchSnoozeAlarm(args, optionsOrCb, cb) {
        const command = new BatchSnoozeAlarmCommand_1.BatchSnoozeAlarmCommand(args);
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
    batchUpdateDetector(args, optionsOrCb, cb) {
        const command = new BatchUpdateDetectorCommand_1.BatchUpdateDetectorCommand(args);
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
    describeAlarm(args, optionsOrCb, cb) {
        const command = new DescribeAlarmCommand_1.DescribeAlarmCommand(args);
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
    describeDetector(args, optionsOrCb, cb) {
        const command = new DescribeDetectorCommand_1.DescribeDetectorCommand(args);
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
    listAlarms(args, optionsOrCb, cb) {
        const command = new ListAlarmsCommand_1.ListAlarmsCommand(args);
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
    listDetectors(args, optionsOrCb, cb) {
        const command = new ListDetectorsCommand_1.ListDetectorsCommand(args);
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
exports.IoTEventsData = IoTEventsData;
//# sourceMappingURL=IoTEventsData.js.map