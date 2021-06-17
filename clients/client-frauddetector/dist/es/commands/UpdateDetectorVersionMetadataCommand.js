import { __extends } from "tslib";
import { UpdateDetectorVersionMetadataRequest, UpdateDetectorVersionMetadataResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateDetectorVersionMetadataCommand, serializeAws_json1_1UpdateDetectorVersionMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or
 *                 <code>INACTIVE</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateDetectorVersionMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateDetectorVersionMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateDetectorVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDetectorVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDetectorVersionMetadataCommand = /** @class */ (function (_super) {
    __extends(UpdateDetectorVersionMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDetectorVersionMetadataCommand(input) {
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
    UpdateDetectorVersionMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateDetectorVersionMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDetectorVersionMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDetectorVersionMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDetectorVersionMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDetectorVersionMetadataCommand(input, context);
    };
    UpdateDetectorVersionMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDetectorVersionMetadataCommand(output, context);
    };
    return UpdateDetectorVersionMetadataCommand;
}($Command));
export { UpdateDetectorVersionMetadataCommand };
//# sourceMappingURL=UpdateDetectorVersionMetadataCommand.js.map