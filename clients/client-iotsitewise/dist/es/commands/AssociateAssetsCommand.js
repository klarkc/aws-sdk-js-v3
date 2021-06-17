import { __extends } from "tslib";
import { AssociateAssetsRequest } from "../models/models_0";
import { deserializeAws_restJson1AssociateAssetsCommand, serializeAws_restJson1AssociateAssetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a child asset with the given parent asset through a hierarchy defined in the
 *       parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, AssociateAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, AssociateAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new AssociateAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAssetsCommandInput} for command's `input` shape.
 * @see {@link AssociateAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateAssetsCommand = /** @class */ (function (_super) {
    __extends(AssociateAssetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateAssetsCommand(input) {
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
    AssociateAssetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "AssociateAssetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateAssetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateAssetsCommand(input, context);
    };
    AssociateAssetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateAssetsCommand(output, context);
    };
    return AssociateAssetsCommand;
}($Command));
export { AssociateAssetsCommand };
//# sourceMappingURL=AssociateAssetsCommand.js.map