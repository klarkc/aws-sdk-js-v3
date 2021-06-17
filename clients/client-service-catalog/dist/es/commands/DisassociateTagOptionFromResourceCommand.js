import { __extends } from "tslib";
import { DisassociateTagOptionFromResourceInput, DisassociateTagOptionFromResourceOutput } from "../models/models_0";
import { deserializeAws_json1_1DisassociateTagOptionFromResourceCommand, serializeAws_json1_1DisassociateTagOptionFromResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified TagOption from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateTagOptionFromResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateTagOptionFromResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateTagOptionFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTagOptionFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateTagOptionFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateTagOptionFromResourceCommand = /** @class */ (function (_super) {
    __extends(DisassociateTagOptionFromResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateTagOptionFromResourceCommand(input) {
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
    DisassociateTagOptionFromResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DisassociateTagOptionFromResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateTagOptionFromResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateTagOptionFromResourceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateTagOptionFromResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateTagOptionFromResourceCommand(input, context);
    };
    DisassociateTagOptionFromResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateTagOptionFromResourceCommand(output, context);
    };
    return DisassociateTagOptionFromResourceCommand;
}($Command));
export { DisassociateTagOptionFromResourceCommand };
//# sourceMappingURL=DisassociateTagOptionFromResourceCommand.js.map