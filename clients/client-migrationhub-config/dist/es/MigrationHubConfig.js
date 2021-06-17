import { __extends } from "tslib";
import { MigrationHubConfigClient } from "./MigrationHubConfigClient";
import { CreateHomeRegionControlCommand, } from "./commands/CreateHomeRegionControlCommand";
import { DescribeHomeRegionControlsCommand, } from "./commands/DescribeHomeRegionControlsCommand";
import { GetHomeRegionCommand, } from "./commands/GetHomeRegionCommand";
/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
 *          <ul>
 *             <li>
 *                <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *           import, or put) while in your home region, or a <code>HomeRegionNotSetException</code>
 *           error is returned.</p>
 *             </li>
 *             <li>
 *                <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of
 *           your home region.</p>
 *             </li>
 *             <li>
 *                <p>If you call a write API outside the home region, an <code>InvalidInputException</code>
 *           is returned.</p>
 *             </li>
 *             <li>
 *                <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub
 *           home region.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 */
var MigrationHubConfig = /** @class */ (function (_super) {
    __extends(MigrationHubConfig, _super);
    function MigrationHubConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MigrationHubConfig.prototype.createHomeRegionControl = function (args, optionsOrCb, cb) {
        var command = new CreateHomeRegionControlCommand(args);
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
    MigrationHubConfig.prototype.describeHomeRegionControls = function (args, optionsOrCb, cb) {
        var command = new DescribeHomeRegionControlsCommand(args);
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
    MigrationHubConfig.prototype.getHomeRegion = function (args, optionsOrCb, cb) {
        var command = new GetHomeRegionCommand(args);
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
    return MigrationHubConfig;
}(MigrationHubConfigClient));
export { MigrationHubConfig };
//# sourceMappingURL=MigrationHubConfig.js.map