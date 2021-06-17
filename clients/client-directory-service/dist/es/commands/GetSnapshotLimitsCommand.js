import { __extends } from "tslib";
import { GetSnapshotLimitsRequest, GetSnapshotLimitsResult } from "../models/models_0";
import { deserializeAws_json1_1GetSnapshotLimitsCommand, serializeAws_json1_1GetSnapshotLimitsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtains the manual snapshot limits for a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetSnapshotLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetSnapshotLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new GetSnapshotLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSnapshotLimitsCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotLimitsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSnapshotLimitsCommand = /** @class */ (function (_super) {
    __extends(GetSnapshotLimitsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSnapshotLimitsCommand(input) {
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
    GetSnapshotLimitsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "GetSnapshotLimitsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSnapshotLimitsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSnapshotLimitsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSnapshotLimitsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSnapshotLimitsCommand(input, context);
    };
    GetSnapshotLimitsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSnapshotLimitsCommand(output, context);
    };
    return GetSnapshotLimitsCommand;
}($Command));
export { GetSnapshotLimitsCommand };
//# sourceMappingURL=GetSnapshotLimitsCommand.js.map