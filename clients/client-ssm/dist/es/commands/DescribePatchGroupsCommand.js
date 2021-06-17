import { __extends } from "tslib";
import { DescribePatchGroupsRequest, DescribePatchGroupsResult } from "../models/models_1";
import { deserializeAws_json1_1DescribePatchGroupsCommand, serializeAws_json1_1DescribePatchGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all patch groups that have been registered with patch baselines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePatchGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribePatchGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePatchGroupsCommand(input) {
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
    DescribePatchGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribePatchGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePatchGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePatchGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePatchGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePatchGroupsCommand(input, context);
    };
    DescribePatchGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePatchGroupsCommand(output, context);
    };
    return DescribePatchGroupsCommand;
}($Command));
export { DescribePatchGroupsCommand };
//# sourceMappingURL=DescribePatchGroupsCommand.js.map