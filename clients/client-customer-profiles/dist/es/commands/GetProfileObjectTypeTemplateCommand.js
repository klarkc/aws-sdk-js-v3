import { __extends } from "tslib";
import { GetProfileObjectTypeTemplateRequest, GetProfileObjectTypeTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1GetProfileObjectTypeTemplateCommand, serializeAws_restJson1GetProfileObjectTypeTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the template information for a specific object type.</p>
 *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
 *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
 *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetProfileObjectTypeTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProfileObjectTypeTemplateCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeTemplateCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProfileObjectTypeTemplateCommand = /** @class */ (function (_super) {
    __extends(GetProfileObjectTypeTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProfileObjectTypeTemplateCommand(input) {
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
    GetProfileObjectTypeTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "GetProfileObjectTypeTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProfileObjectTypeTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetProfileObjectTypeTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProfileObjectTypeTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetProfileObjectTypeTemplateCommand(input, context);
    };
    GetProfileObjectTypeTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetProfileObjectTypeTemplateCommand(output, context);
    };
    return GetProfileObjectTypeTemplateCommand;
}($Command));
export { GetProfileObjectTypeTemplateCommand };
//# sourceMappingURL=GetProfileObjectTypeTemplateCommand.js.map