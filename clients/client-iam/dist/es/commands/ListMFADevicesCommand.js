import { __extends } from "tslib";
import { ListMFADevicesRequest, ListMFADevicesResponse } from "../models/models_0";
import { deserializeAws_queryListMFADevicesCommand, serializeAws_queryListMFADevicesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name,
 *             then this operation lists all the MFA devices associated with the specified user. If you
 *             do not specify a user name, IAM determines the user name implicitly based on the AWS
 *             access key ID signing the request for this operation.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListMFADevicesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListMFADevicesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListMFADevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMFADevicesCommandInput} for command's `input` shape.
 * @see {@link ListMFADevicesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMFADevicesCommand = /** @class */ (function (_super) {
    __extends(ListMFADevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMFADevicesCommand(input) {
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
    ListMFADevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListMFADevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMFADevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMFADevicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMFADevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListMFADevicesCommand(input, context);
    };
    ListMFADevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListMFADevicesCommand(output, context);
    };
    return ListMFADevicesCommand;
}($Command));
export { ListMFADevicesCommand };
//# sourceMappingURL=ListMFADevicesCommand.js.map