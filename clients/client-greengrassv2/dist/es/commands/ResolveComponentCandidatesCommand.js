import { __extends } from "tslib";
import { ResolveComponentCandidatesRequest, ResolveComponentCandidatesResponse } from "../models/models_0";
import { deserializeAws_restJson1ResolveComponentCandidatesCommand, serializeAws_restJson1ResolveComponentCandidatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of components that meet the component, version, and platform requirements
 *       of a deployment. AWS IoT Greengrass core devices call this operation when they receive a deployment to
 *       identify the components to install.</p>
 *          <p>This operation identifies components that meet all dependency requirements for a
 *       deployment. If the requirements conflict, then this operation returns an error and the
 *       deployment fails. For example, this occurs if component <code>A</code> requires version
 *         <code>>2.0.0</code> and component <code>B</code> requires version <code><2.0.0</code>
 *       of a component dependency.</p>
 *          <p>When you specify the component candidates to resolve, AWS IoT Greengrass compares each component's
 *       digest from the core device with the component's digest in the AWS Cloud. If the digests don't
 *       match, then AWS IoT Greengrass specifies to use the version from the AWS Cloud.</p>
 *          <important>
 *             <p>To use this operation, you must use the data plane API endpoint and authenticate with an
 *         AWS IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">AWS IoT Greengrass endpoints and quotas</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ResolveComponentCandidatesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ResolveComponentCandidatesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ResolveComponentCandidatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveComponentCandidatesCommandInput} for command's `input` shape.
 * @see {@link ResolveComponentCandidatesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResolveComponentCandidatesCommand = /** @class */ (function (_super) {
    __extends(ResolveComponentCandidatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResolveComponentCandidatesCommand(input) {
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
    ResolveComponentCandidatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "ResolveComponentCandidatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResolveComponentCandidatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResolveComponentCandidatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResolveComponentCandidatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ResolveComponentCandidatesCommand(input, context);
    };
    ResolveComponentCandidatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ResolveComponentCandidatesCommand(output, context);
    };
    return ResolveComponentCandidatesCommand;
}($Command));
export { ResolveComponentCandidatesCommand };
//# sourceMappingURL=ResolveComponentCandidatesCommand.js.map