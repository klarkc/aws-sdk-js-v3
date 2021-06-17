import { __extends } from "tslib";
import { GetStoredQueryRequest, GetStoredQueryResponse } from "../models/models_0";
import { deserializeAws_json1_1GetStoredQueryCommand, serializeAws_json1_1GetStoredQueryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details of a specific stored query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetStoredQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStoredQueryCommandInput} for command's `input` shape.
 * @see {@link GetStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStoredQueryCommand = /** @class */ (function (_super) {
    __extends(GetStoredQueryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStoredQueryCommand(input) {
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
    GetStoredQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetStoredQueryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStoredQueryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStoredQueryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStoredQueryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetStoredQueryCommand(input, context);
    };
    GetStoredQueryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetStoredQueryCommand(output, context);
    };
    return GetStoredQueryCommand;
}($Command));
export { GetStoredQueryCommand };
//# sourceMappingURL=GetStoredQueryCommand.js.map