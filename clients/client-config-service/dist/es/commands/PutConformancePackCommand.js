import { __extends } from "tslib";
import { PutConformancePackRequest, PutConformancePackResponse } from "../models/models_0";
import { deserializeAws_json1_1PutConformancePackCommand, serializeAws_json1_1PutConformancePackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a conformance pack. A conformance pack is a collection of AWS Config rules that can be easily deployed in an account and a region and across AWS Organization.</p>
 * 		       <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account.
 * 		The service linked role is created only when the role does not exist in your account. </p>
 * 		       <note>
 *             <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
 * 			If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConformancePackCommandInput} for command's `input` shape.
 * @see {@link PutConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConformancePackCommand = /** @class */ (function (_super) {
    __extends(PutConformancePackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutConformancePackCommand(input) {
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
    PutConformancePackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutConformancePackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutConformancePackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutConformancePackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutConformancePackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutConformancePackCommand(input, context);
    };
    PutConformancePackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutConformancePackCommand(output, context);
    };
    return PutConformancePackCommand;
}($Command));
export { PutConformancePackCommand };
//# sourceMappingURL=PutConformancePackCommand.js.map