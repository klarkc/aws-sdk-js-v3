import { __extends } from "tslib";
import { CreateContextRequest, CreateContextResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateContextCommand, serializeAws_json1_1CreateContextCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <i>context</i>. A context is a lineage tracking entity that
 *         represents a logical grouping of other tracking or experiment entities. Some examples are
 *         an endpoint and a model package. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 *          <note>
 *             <p>
 *                <code>CreateContext</code> can only be invoked from within an SageMaker managed
 *           environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
 *           notebooks. A call to <code>CreateContext</code> from outside one of these
 *           environments results in an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateContextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContextCommandInput} for command's `input` shape.
 * @see {@link CreateContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContextCommand = /** @class */ (function (_super) {
    __extends(CreateContextCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContextCommand(input) {
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
    CreateContextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateContextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContextResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContextCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateContextCommand(input, context);
    };
    CreateContextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateContextCommand(output, context);
    };
    return CreateContextCommand;
}($Command));
export { CreateContextCommand };
//# sourceMappingURL=CreateContextCommand.js.map