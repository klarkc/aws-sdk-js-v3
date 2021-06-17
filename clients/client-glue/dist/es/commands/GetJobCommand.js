import { __extends } from "tslib";
import { GetJobRequest, GetJobResponse } from "../models/models_0";
import { deserializeAws_json1_1GetJobCommand, serializeAws_json1_1GetJobCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an existing job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobCommand = /** @class */ (function (_super) {
    __extends(GetJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobCommand(input) {
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
    GetJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetJobCommand(input, context);
    };
    GetJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetJobCommand(output, context);
    };
    return GetJobCommand;
}($Command));
export { GetJobCommand };
//# sourceMappingURL=GetJobCommand.js.map