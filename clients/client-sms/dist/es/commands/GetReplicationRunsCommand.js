import { __extends } from "tslib";
import { GetReplicationRunsRequest, GetReplicationRunsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetReplicationRunsCommand, serializeAws_json1_1GetReplicationRunsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the replication runs for the specified replication job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetReplicationRunsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetReplicationRunsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetReplicationRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReplicationRunsCommandInput} for command's `input` shape.
 * @see {@link GetReplicationRunsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReplicationRunsCommand = /** @class */ (function (_super) {
    __extends(GetReplicationRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReplicationRunsCommand(input) {
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
    GetReplicationRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "GetReplicationRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReplicationRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetReplicationRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReplicationRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetReplicationRunsCommand(input, context);
    };
    GetReplicationRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetReplicationRunsCommand(output, context);
    };
    return GetReplicationRunsCommand;
}($Command));
export { GetReplicationRunsCommand };
//# sourceMappingURL=GetReplicationRunsCommand.js.map