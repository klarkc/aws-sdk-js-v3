import { __extends } from "tslib";
import { GetRecordRequest, GetRecordResponse } from "../models/models_0";
import { deserializeAws_restJson1GetRecordCommand, serializeAws_restJson1GetRecordCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the
 *          latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with
 *             <code>RecordIdentifierValue</code> is found, then an empty result is returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const command = new GetRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecordCommandInput} for command's `input` shape.
 * @see {@link GetRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecordCommand = /** @class */ (function (_super) {
    __extends(GetRecordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRecordCommand(input) {
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
    GetRecordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerFeatureStoreRuntimeClient";
        var commandName = "GetRecordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRecordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRecordResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRecordCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRecordCommand(input, context);
    };
    GetRecordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRecordCommand(output, context);
    };
    return GetRecordCommand;
}($Command));
export { GetRecordCommand };
//# sourceMappingURL=GetRecordCommand.js.map