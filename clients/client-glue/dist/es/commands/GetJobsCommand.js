import { __extends } from "tslib";
import { GetJobsRequest, GetJobsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetJobsCommand, serializeAws_json1_1GetJobsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all current job definitions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobsCommandInput} for command's `input` shape.
 * @see {@link GetJobsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobsCommand = /** @class */ (function (_super) {
    __extends(GetJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobsCommand(input) {
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
    GetJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetJobsCommand(input, context);
    };
    GetJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetJobsCommand(output, context);
    };
    return GetJobsCommand;
}($Command));
export { GetJobsCommand };
//# sourceMappingURL=GetJobsCommand.js.map