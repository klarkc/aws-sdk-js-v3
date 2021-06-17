import { __extends } from "tslib";
import { ListAccountAliasesRequest, ListAccountAliasesResponse } from "../models/models_0";
import { deserializeAws_queryListAccountAliasesCommand, serializeAws_queryListAccountAliasesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the account alias associated with the AWS account (Note: you can have only
 *             one). For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your
 *                 AWS account ID</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAccountAliasesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAccountAliasesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAccountAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAccountAliasesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountAliasesCommand = /** @class */ (function (_super) {
    __extends(ListAccountAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccountAliasesCommand(input) {
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
    ListAccountAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListAccountAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccountAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccountAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccountAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListAccountAliasesCommand(input, context);
    };
    ListAccountAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListAccountAliasesCommand(output, context);
    };
    return ListAccountAliasesCommand;
}($Command));
export { ListAccountAliasesCommand };
//# sourceMappingURL=ListAccountAliasesCommand.js.map