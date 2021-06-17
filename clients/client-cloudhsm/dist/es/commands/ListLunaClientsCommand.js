import { __extends } from "tslib";
import { ListLunaClientsRequest, ListLunaClientsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListLunaClientsCommand, serializeAws_json1_1ListLunaClientsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Lists all of the clients.</p>
 *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
 *       If more results are available, the <code>NextToken</code> member of the response contains a
 *       token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set
 *       of items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ListLunaClientsCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ListLunaClientsCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const command = new ListLunaClientsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLunaClientsCommandInput} for command's `input` shape.
 * @see {@link ListLunaClientsCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLunaClientsCommand = /** @class */ (function (_super) {
    __extends(ListLunaClientsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLunaClientsCommand(input) {
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
    ListLunaClientsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudHSMClient";
        var commandName = "ListLunaClientsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLunaClientsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLunaClientsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLunaClientsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLunaClientsCommand(input, context);
    };
    ListLunaClientsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLunaClientsCommand(output, context);
    };
    return ListLunaClientsCommand;
}($Command));
export { ListLunaClientsCommand };
//# sourceMappingURL=ListLunaClientsCommand.js.map