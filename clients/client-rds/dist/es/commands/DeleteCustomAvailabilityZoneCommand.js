import { __extends } from "tslib";
import { DeleteCustomAvailabilityZoneMessage, DeleteCustomAvailabilityZoneResult } from "../models/models_0";
import { deserializeAws_queryDeleteCustomAvailabilityZoneCommand, serializeAws_queryDeleteCustomAvailabilityZoneCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a custom Availability Zone (AZ).</p>
 *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 RDS on VMware User Guide.</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteCustomAvailabilityZoneCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteCustomAvailabilityZoneCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteCustomAvailabilityZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomAvailabilityZoneCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomAvailabilityZoneCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomAvailabilityZoneCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomAvailabilityZoneCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomAvailabilityZoneCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeleteCustomAvailabilityZoneCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteCustomAvailabilityZoneCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomAvailabilityZoneMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCustomAvailabilityZoneResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomAvailabilityZoneCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteCustomAvailabilityZoneCommand(input, context);
    };
    DeleteCustomAvailabilityZoneCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteCustomAvailabilityZoneCommand(output, context);
    };
    return DeleteCustomAvailabilityZoneCommand;
}($Command));
export { DeleteCustomAvailabilityZoneCommand };
//# sourceMappingURL=DeleteCustomAvailabilityZoneCommand.js.map