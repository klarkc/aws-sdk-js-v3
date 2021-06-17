import { __extends } from "tslib";
import { ListPrincipalPoliciesRequest, ListPrincipalPoliciesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListPrincipalPoliciesCommand, serializeAws_restJson1ListPrincipalPoliciesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Lists the policies attached to the specified principal. If you use an Cognito
 *          identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPrincipalPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPrincipalPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListPrincipalPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPrincipalPoliciesCommand(input) {
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
    ListPrincipalPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListPrincipalPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPrincipalPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPrincipalPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPrincipalPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPrincipalPoliciesCommand(input, context);
    };
    ListPrincipalPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPrincipalPoliciesCommand(output, context);
    };
    return ListPrincipalPoliciesCommand;
}($Command));
export { ListPrincipalPoliciesCommand };
//# sourceMappingURL=ListPrincipalPoliciesCommand.js.map