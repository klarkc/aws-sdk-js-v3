import { __extends } from "tslib";
import { ListInfrastructureConfigurationsRequest, ListInfrastructureConfigurationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInfrastructureConfigurationsCommand, serializeAws_restJson1ListInfrastructureConfigurationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a list of infrastructure configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListInfrastructureConfigurationsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListInfrastructureConfigurationsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListInfrastructureConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInfrastructureConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListInfrastructureConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInfrastructureConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListInfrastructureConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInfrastructureConfigurationsCommand(input) {
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
    ListInfrastructureConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListInfrastructureConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInfrastructureConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInfrastructureConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInfrastructureConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInfrastructureConfigurationsCommand(input, context);
    };
    ListInfrastructureConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInfrastructureConfigurationsCommand(output, context);
    };
    return ListInfrastructureConfigurationsCommand;
}($Command));
export { ListInfrastructureConfigurationsCommand };
//# sourceMappingURL=ListInfrastructureConfigurationsCommand.js.map