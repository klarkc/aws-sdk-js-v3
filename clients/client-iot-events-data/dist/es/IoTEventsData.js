import { __extends } from "tslib";
import { IoTEventsDataClient } from "./IoTEventsDataClient";
import { BatchAcknowledgeAlarmCommand, } from "./commands/BatchAcknowledgeAlarmCommand";
import { BatchDisableAlarmCommand, } from "./commands/BatchDisableAlarmCommand";
import { BatchEnableAlarmCommand, } from "./commands/BatchEnableAlarmCommand";
import { BatchPutMessageCommand, } from "./commands/BatchPutMessageCommand";
import { BatchResetAlarmCommand, } from "./commands/BatchResetAlarmCommand";
import { BatchSnoozeAlarmCommand, } from "./commands/BatchSnoozeAlarmCommand";
import { BatchUpdateDetectorCommand, } from "./commands/BatchUpdateDetectorCommand";
import { DescribeAlarmCommand, } from "./commands/DescribeAlarmCommand";
import { DescribeDetectorCommand, } from "./commands/DescribeDetectorCommand";
import { ListAlarmsCommand } from "./commands/ListAlarmsCommand";
import { ListDetectorsCommand, } from "./commands/ListDetectorsCommand";
/**
 * <p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and
 *       triggers actions when such events occur. You can use AWS IoT Events Data API commands to send inputs to
 *       detectors, list detectors, and view or update a detector's status.</p>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is AWS IoT Events?</a> in the
 *         <i>AWS IoT Events Developer Guide</i>.</p>
 */
var IoTEventsData = /** @class */ (function (_super) {
    __extends(IoTEventsData, _super);
    function IoTEventsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IoTEventsData.prototype.batchAcknowledgeAlarm = function (args, optionsOrCb, cb) {
        var command = new BatchAcknowledgeAlarmCommand(args);
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
    IoTEventsData.prototype.batchDisableAlarm = function (args, optionsOrCb, cb) {
        var command = new BatchDisableAlarmCommand(args);
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
    IoTEventsData.prototype.batchEnableAlarm = function (args, optionsOrCb, cb) {
        var command = new BatchEnableAlarmCommand(args);
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
    IoTEventsData.prototype.batchPutMessage = function (args, optionsOrCb, cb) {
        var command = new BatchPutMessageCommand(args);
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
    IoTEventsData.prototype.batchResetAlarm = function (args, optionsOrCb, cb) {
        var command = new BatchResetAlarmCommand(args);
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
    IoTEventsData.prototype.batchSnoozeAlarm = function (args, optionsOrCb, cb) {
        var command = new BatchSnoozeAlarmCommand(args);
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
    IoTEventsData.prototype.batchUpdateDetector = function (args, optionsOrCb, cb) {
        var command = new BatchUpdateDetectorCommand(args);
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
    IoTEventsData.prototype.describeAlarm = function (args, optionsOrCb, cb) {
        var command = new DescribeAlarmCommand(args);
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
    IoTEventsData.prototype.describeDetector = function (args, optionsOrCb, cb) {
        var command = new DescribeDetectorCommand(args);
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
    IoTEventsData.prototype.listAlarms = function (args, optionsOrCb, cb) {
        var command = new ListAlarmsCommand(args);
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
    IoTEventsData.prototype.listDetectors = function (args, optionsOrCb, cb) {
        var command = new ListDetectorsCommand(args);
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
    return IoTEventsData;
}(IoTEventsDataClient));
export { IoTEventsData };
//# sourceMappingURL=IoTEventsData.js.map