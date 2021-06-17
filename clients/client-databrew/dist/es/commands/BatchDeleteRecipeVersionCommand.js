import { __extends } from "tslib";
import { BatchDeleteRecipeVersionRequest, BatchDeleteRecipeVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchDeleteRecipeVersionCommand, serializeAws_restJson1BatchDeleteRecipeVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more versions of a recipe at a time.</p>
 *
 *         <p>The entire request will be rejected if:</p>
 *         <ul>
 *             <li>
 *                 <p>The recipe does not exist.</p>
 *             </li>
 *             <li>
 *                 <p>There is an invalid version identifier in the list of versions.</p>
 *             </li>
 *             <li>
 *                 <p>The version list is empty.</p>
 *             </li>
 *             <li>
 *                 <p>The version list size exceeds 50.</p>
 *             </li>
 *             <li>
 *                 <p>The version list contains duplicate entries.</p>
 *             </li>
 *          </ul>
 *
 *         <p>The request will complete successfully, but with partial failures, if:</p>
 *         <ul>
 *             <li>
 *                 <p>A version does not exist.</p>
 *             </li>
 *             <li>
 *                 <p>A version is being used by a job.</p>
 *             </li>
 *             <li>
 *                 <p>You specify <code>LATEST_WORKING</code>, but it's being used by a
 *                     project.</p>
 *             </li>
 *             <li>
 *                 <p>The version fails to be deleted.</p>
 *             </li>
 *          </ul>
 *         <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no
 *             other versions. If you try to delete <code>LATEST_WORKING</code> while other versions
 *             exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as
 *             partial failure in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, BatchDeleteRecipeVersionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, BatchDeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new BatchDeleteRecipeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteRecipeVersionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteRecipeVersionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteRecipeVersionCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteRecipeVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteRecipeVersionCommand(input) {
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
    BatchDeleteRecipeVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "BatchDeleteRecipeVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteRecipeVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteRecipeVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteRecipeVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDeleteRecipeVersionCommand(input, context);
    };
    BatchDeleteRecipeVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDeleteRecipeVersionCommand(output, context);
    };
    return BatchDeleteRecipeVersionCommand;
}($Command));
export { BatchDeleteRecipeVersionCommand };
//# sourceMappingURL=BatchDeleteRecipeVersionCommand.js.map