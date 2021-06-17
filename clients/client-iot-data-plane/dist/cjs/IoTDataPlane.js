"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoTDataPlane = void 0;
const IoTDataPlaneClient_1 = require("./IoTDataPlaneClient");
const DeleteThingShadowCommand_1 = require("./commands/DeleteThingShadowCommand");
const GetThingShadowCommand_1 = require("./commands/GetThingShadowCommand");
const ListNamedShadowsForThingCommand_1 = require("./commands/ListNamedShadowsForThingCommand");
const PublishCommand_1 = require("./commands/PublishCommand");
const UpdateThingShadowCommand_1 = require("./commands/UpdateThingShadowCommand");
/**
 * <fullname>AWS IoT</fullname>
 *          <p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors,
 *       actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and
 *       things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a
 *       persistent representation of your things and their state in the AWS cloud.</p>
 *          <p>Find the endpoint address for actions in the AWS IoT data plane by running this CLI command:</p>
 *          <p>
 *             <code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code>
 *          </p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">AWS Signature Version 4</a>
 *       to sign requests is: <i>iotdevicegateway</i>.</p>
 */
class IoTDataPlane extends IoTDataPlaneClient_1.IoTDataPlaneClient {
    deleteThingShadow(args, optionsOrCb, cb) {
        const command = new DeleteThingShadowCommand_1.DeleteThingShadowCommand(args);
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
    getThingShadow(args, optionsOrCb, cb) {
        const command = new GetThingShadowCommand_1.GetThingShadowCommand(args);
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
    listNamedShadowsForThing(args, optionsOrCb, cb) {
        const command = new ListNamedShadowsForThingCommand_1.ListNamedShadowsForThingCommand(args);
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
    publish(args, optionsOrCb, cb) {
        const command = new PublishCommand_1.PublishCommand(args);
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
    updateThingShadow(args, optionsOrCb, cb) {
        const command = new UpdateThingShadowCommand_1.UpdateThingShadowCommand(args);
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
exports.IoTDataPlane = IoTDataPlane;
//# sourceMappingURL=IoTDataPlane.js.map