import { __extends } from "tslib";
import { GetJobRunsRequest, GetJobRunsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetJobRunsCommand, serializeAws_json1_1GetJobRunsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metadata for all runs of a given job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobRunsCommandInput} for command's `input` shape.
 * @see {@link GetJobRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobRunsCommand = /** @class */ (function (_super) {
    __extends(GetJobRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobRunsCommand(input) {
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
    GetJobRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetJobRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetJobRunsCommand(input, context);
    };
    GetJobRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetJobRunsCommand(output, context);
    };
    return GetJobRunsCommand;
}($Command));
export { GetJobRunsCommand };
//# sourceMappingURL=GetJobRunsCommand.js.map