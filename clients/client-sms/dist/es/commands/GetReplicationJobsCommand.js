import { __extends } from "tslib";
import { GetReplicationJobsRequest, GetReplicationJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetReplicationJobsCommand, serializeAws_json1_1GetReplicationJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified replication job or all of your replication jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetReplicationJobsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetReplicationJobsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetReplicationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReplicationJobsCommandInput} for command's `input` shape.
 * @see {@link GetReplicationJobsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReplicationJobsCommand = /** @class */ (function (_super) {
    __extends(GetReplicationJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReplicationJobsCommand(input) {
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
    GetReplicationJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "GetReplicationJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReplicationJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetReplicationJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReplicationJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetReplicationJobsCommand(input, context);
    };
    GetReplicationJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetReplicationJobsCommand(output, context);
    };
    return GetReplicationJobsCommand;
}($Command));
export { GetReplicationJobsCommand };
//# sourceMappingURL=GetReplicationJobsCommand.js.map