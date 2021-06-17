import { __extends } from "tslib";
import { PutImageTagMutabilityRequest, PutImageTagMutabilityResponse } from "../models/models_0";
import { deserializeAws_json1_1PutImageTagMutabilityCommand, serializeAws_json1_1PutImageTagMutabilityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the image tag mutability settings for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image Tag
 *                 Mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageTagMutabilityCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageTagMutabilityCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageTagMutabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageTagMutabilityCommandInput} for command's `input` shape.
 * @see {@link PutImageTagMutabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutImageTagMutabilityCommand = /** @class */ (function (_super) {
    __extends(PutImageTagMutabilityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutImageTagMutabilityCommand(input) {
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
    PutImageTagMutabilityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "PutImageTagMutabilityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutImageTagMutabilityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutImageTagMutabilityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutImageTagMutabilityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutImageTagMutabilityCommand(input, context);
    };
    PutImageTagMutabilityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutImageTagMutabilityCommand(output, context);
    };
    return PutImageTagMutabilityCommand;
}($Command));
export { PutImageTagMutabilityCommand };
//# sourceMappingURL=PutImageTagMutabilityCommand.js.map