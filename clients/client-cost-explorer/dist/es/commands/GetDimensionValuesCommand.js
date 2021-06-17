import { __extends } from "tslib";
import { GetDimensionValuesRequest, GetDimensionValuesResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDimensionValuesCommand, serializeAws_json1_1GetDimensionValuesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetDimensionValuesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetDimensionValuesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetDimensionValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDimensionValuesCommandInput} for command's `input` shape.
 * @see {@link GetDimensionValuesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDimensionValuesCommand = /** @class */ (function (_super) {
    __extends(GetDimensionValuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDimensionValuesCommand(input) {
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
    GetDimensionValuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetDimensionValuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDimensionValuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDimensionValuesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDimensionValuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDimensionValuesCommand(input, context);
    };
    GetDimensionValuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDimensionValuesCommand(output, context);
    };
    return GetDimensionValuesCommand;
}($Command));
export { GetDimensionValuesCommand };
//# sourceMappingURL=GetDimensionValuesCommand.js.map