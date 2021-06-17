import { __extends } from "tslib";
import { DisassociateAssetsRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateAssetsCommand, serializeAws_restJson1DisassociateAssetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a child asset from the given parent asset through a hierarchy defined in the
 *       parent asset's model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DisassociateAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DisassociateAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DisassociateAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAssetsCommandInput} for command's `input` shape.
 * @see {@link DisassociateAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateAssetsCommand = /** @class */ (function (_super) {
    __extends(DisassociateAssetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateAssetsCommand(input) {
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
    DisassociateAssetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DisassociateAssetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateAssetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateAssetsCommand(input, context);
    };
    DisassociateAssetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateAssetsCommand(output, context);
    };
    return DisassociateAssetsCommand;
}($Command));
export { DisassociateAssetsCommand };
//# sourceMappingURL=DisassociateAssetsCommand.js.map