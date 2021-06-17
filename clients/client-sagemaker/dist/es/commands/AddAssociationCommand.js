import { __extends } from "tslib";
import { AddAssociationRequest, AddAssociationResponse } from "../models/models_0";
import { deserializeAws_json1_1AddAssociationCommand, serializeAws_json1_1AddAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an <i>association</i> between the source and the destination. A
 *         source can be associated with multiple destinations, and a destination can be associated
 *         with multiple sources. An association is a lineage tracking entity. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AddAssociationCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AddAssociationCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new AddAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddAssociationCommandInput} for command's `input` shape.
 * @see {@link AddAssociationCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddAssociationCommand = /** @class */ (function (_super) {
    __extends(AddAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddAssociationCommand(input) {
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
    AddAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "AddAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddAssociationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddAssociationCommand(input, context);
    };
    AddAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddAssociationCommand(output, context);
    };
    return AddAssociationCommand;
}($Command));
export { AddAssociationCommand };
//# sourceMappingURL=AddAssociationCommand.js.map