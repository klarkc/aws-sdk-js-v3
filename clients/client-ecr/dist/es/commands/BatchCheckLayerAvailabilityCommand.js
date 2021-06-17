import { __extends } from "tslib";
import { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchCheckLayerAvailabilityCommand, serializeAws_json1_1BatchCheckLayerAvailabilityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Checks the availability of one or more image layers in a repository.</p>
 *         <p>When an image is pushed to a repository, each image layer is checked to verify if it
 *             has been uploaded before. If it has been uploaded, then the image layer is
 *             skipped.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchCheckLayerAvailabilityCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchCheckLayerAvailabilityCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new BatchCheckLayerAvailabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCheckLayerAvailabilityCommandInput} for command's `input` shape.
 * @see {@link BatchCheckLayerAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchCheckLayerAvailabilityCommand = /** @class */ (function (_super) {
    __extends(BatchCheckLayerAvailabilityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchCheckLayerAvailabilityCommand(input) {
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
    BatchCheckLayerAvailabilityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "BatchCheckLayerAvailabilityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchCheckLayerAvailabilityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchCheckLayerAvailabilityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchCheckLayerAvailabilityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchCheckLayerAvailabilityCommand(input, context);
    };
    BatchCheckLayerAvailabilityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchCheckLayerAvailabilityCommand(output, context);
    };
    return BatchCheckLayerAvailabilityCommand;
}($Command));
export { BatchCheckLayerAvailabilityCommand };
//# sourceMappingURL=BatchCheckLayerAvailabilityCommand.js.map