import { __extends } from "tslib";
import { GetPartitionRequest, GetPartitionResponse } from "../models/models_1";
import { deserializeAws_json1_1GetPartitionCommand, serializeAws_json1_1GetPartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a specified partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartitionCommandInput} for command's `input` shape.
 * @see {@link GetPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPartitionCommand = /** @class */ (function (_super) {
    __extends(GetPartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPartitionCommand(input) {
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
    GetPartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetPartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPartitionCommand(input, context);
    };
    GetPartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPartitionCommand(output, context);
    };
    return GetPartitionCommand;
}($Command));
export { GetPartitionCommand };
//# sourceMappingURL=GetPartitionCommand.js.map