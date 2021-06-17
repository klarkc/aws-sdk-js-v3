import { __extends } from "tslib";
import { IoTDataPlaneClient } from "./IoTDataPlaneClient";
import { DeleteThingShadowCommand, } from "./commands/DeleteThingShadowCommand";
import { GetThingShadowCommand, } from "./commands/GetThingShadowCommand";
import { ListNamedShadowsForThingCommand, } from "./commands/ListNamedShadowsForThingCommand";
import { PublishCommand } from "./commands/PublishCommand";
import { UpdateThingShadowCommand, } from "./commands/UpdateThingShadowCommand";
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
var IoTDataPlane = /** @class */ (function (_super) {
    __extends(IoTDataPlane, _super);
    function IoTDataPlane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IoTDataPlane.prototype.deleteThingShadow = function (args, optionsOrCb, cb) {
        var command = new DeleteThingShadowCommand(args);
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
    IoTDataPlane.prototype.getThingShadow = function (args, optionsOrCb, cb) {
        var command = new GetThingShadowCommand(args);
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
    IoTDataPlane.prototype.listNamedShadowsForThing = function (args, optionsOrCb, cb) {
        var command = new ListNamedShadowsForThingCommand(args);
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
    IoTDataPlane.prototype.publish = function (args, optionsOrCb, cb) {
        var command = new PublishCommand(args);
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
    IoTDataPlane.prototype.updateThingShadow = function (args, optionsOrCb, cb) {
        var command = new UpdateThingShadowCommand(args);
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
    return IoTDataPlane;
}(IoTDataPlaneClient));
export { IoTDataPlane };
//# sourceMappingURL=IoTDataPlane.js.map