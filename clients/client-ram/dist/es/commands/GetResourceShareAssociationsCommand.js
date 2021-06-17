import { __extends } from "tslib";
import { GetResourceShareAssociationsRequest, GetResourceShareAssociationsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetResourceShareAssociationsCommand, serializeAws_restJson1GetResourceShareAssociationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the resources or principals for the resource shares that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceShareAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceShareAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceShareAssociationsCommand = /** @class */ (function (_super) {
    __extends(GetResourceShareAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceShareAssociationsCommand(input) {
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
    GetResourceShareAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "GetResourceShareAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceShareAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceShareAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceShareAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourceShareAssociationsCommand(input, context);
    };
    GetResourceShareAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourceShareAssociationsCommand(output, context);
    };
    return GetResourceShareAssociationsCommand;
}($Command));
export { GetResourceShareAssociationsCommand };
//# sourceMappingURL=GetResourceShareAssociationsCommand.js.map