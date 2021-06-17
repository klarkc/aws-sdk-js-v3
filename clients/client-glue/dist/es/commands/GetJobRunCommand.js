import { __extends } from "tslib";
import { GetJobRunRequest, GetJobRunResponse } from "../models/models_1";
import { deserializeAws_json1_1GetJobRunCommand, serializeAws_json1_1GetJobRunCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the metadata for a given job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobRunCommandInput} for command's `input` shape.
 * @see {@link GetJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobRunCommand = /** @class */ (function (_super) {
    __extends(GetJobRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobRunCommand(input) {
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
    GetJobRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetJobRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetJobRunCommand(input, context);
    };
    GetJobRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetJobRunCommand(output, context);
    };
    return GetJobRunCommand;
}($Command));
export { GetJobRunCommand };
//# sourceMappingURL=GetJobRunCommand.js.map