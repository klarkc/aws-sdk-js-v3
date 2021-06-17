import { __extends } from "tslib";
import { GetPartitionsRequest, GetPartitionsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetPartitionsCommand, serializeAws_json1_1GetPartitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the partitions in a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetPartitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartitionsCommandInput} for command's `input` shape.
 * @see {@link GetPartitionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPartitionsCommand = /** @class */ (function (_super) {
    __extends(GetPartitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPartitionsCommand(input) {
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
    GetPartitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetPartitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPartitionsCommand(input, context);
    };
    GetPartitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPartitionsCommand(output, context);
    };
    return GetPartitionsCommand;
}($Command));
export { GetPartitionsCommand };
//# sourceMappingURL=GetPartitionsCommand.js.map