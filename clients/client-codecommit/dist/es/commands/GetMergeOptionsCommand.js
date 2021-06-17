import { __extends } from "tslib";
import { GetMergeOptionsInput, GetMergeOptionsOutput } from "../models/models_0";
import { deserializeAws_json1_1GetMergeOptionsCommand, serializeAws_json1_1GetMergeOptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the merge options available for merging two specified
 *             branches. For details about why a merge option is not available, use GetMergeConflicts
 *             or DescribeMergeConflicts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeOptionsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeOptionsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetMergeOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMergeOptionsCommandInput} for command's `input` shape.
 * @see {@link GetMergeOptionsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMergeOptionsCommand = /** @class */ (function (_super) {
    __extends(GetMergeOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMergeOptionsCommand(input) {
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
    GetMergeOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetMergeOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMergeOptionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMergeOptionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMergeOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMergeOptionsCommand(input, context);
    };
    GetMergeOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMergeOptionsCommand(output, context);
    };
    return GetMergeOptionsCommand;
}($Command));
export { GetMergeOptionsCommand };
//# sourceMappingURL=GetMergeOptionsCommand.js.map