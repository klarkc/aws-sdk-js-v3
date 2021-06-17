import { __extends } from "tslib";
import { GetProductsRequest, GetProductsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetProductsCommand, serializeAws_json1_1GetProductsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all products that match the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetProductsCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetProductsCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const command = new GetProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProductsCommandInput} for command's `input` shape.
 * @see {@link GetProductsCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProductsCommand = /** @class */ (function (_super) {
    __extends(GetProductsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProductsCommand(input) {
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
    GetProductsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PricingClient";
        var commandName = "GetProductsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProductsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetProductsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProductsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetProductsCommand(input, context);
    };
    GetProductsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetProductsCommand(output, context);
    };
    return GetProductsCommand;
}($Command));
export { GetProductsCommand };
//# sourceMappingURL=GetProductsCommand.js.map