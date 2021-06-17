import { __extends } from "tslib";
import { CreateFeatureGroupRequest, CreateFeatureGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateFeatureGroupCommand, serializeAws_json1_1CreateFeatureGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of
 *             <code>Features</code> defined in the <code>FeatureStore</code> to describe a
 *             <code>Record</code>. </p>
 *          <p>The <code>FeatureGroup</code> defines the schema and features contained in the
 *          FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of
 *             <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an
 *             <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code>
 *             and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS service quotas</a> to see
 *          the <code>FeatureGroup</code>s quota for your AWS account.</p>
 *          <important>
 *             <p>You must include at least one of <code>OnlineStoreConfig</code> and
 *                <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateFeatureGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link CreateFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFeatureGroupCommand = /** @class */ (function (_super) {
    __extends(CreateFeatureGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFeatureGroupCommand(input) {
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
    CreateFeatureGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateFeatureGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFeatureGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFeatureGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFeatureGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateFeatureGroupCommand(input, context);
    };
    CreateFeatureGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateFeatureGroupCommand(output, context);
    };
    return CreateFeatureGroupCommand;
}($Command));
export { CreateFeatureGroupCommand };
//# sourceMappingURL=CreateFeatureGroupCommand.js.map