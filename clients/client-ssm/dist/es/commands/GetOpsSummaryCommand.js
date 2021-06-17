import { __extends } from "tslib";
import { GetOpsSummaryResult } from "../models/models_1";
import { GetOpsSummaryRequest } from "../models/models_2";
import { deserializeAws_json1_1GetOpsSummaryCommand, serializeAws_json1_1GetOpsSummaryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>View a summary of OpsItems based on specified filters and aggregators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsSummaryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsSummaryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetOpsSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetOpsSummaryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOpsSummaryCommand = /** @class */ (function (_super) {
    __extends(GetOpsSummaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOpsSummaryCommand(input) {
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
    GetOpsSummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetOpsSummaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOpsSummaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOpsSummaryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOpsSummaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOpsSummaryCommand(input, context);
    };
    GetOpsSummaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOpsSummaryCommand(output, context);
    };
    return GetOpsSummaryCommand;
}($Command));
export { GetOpsSummaryCommand };
//# sourceMappingURL=GetOpsSummaryCommand.js.map