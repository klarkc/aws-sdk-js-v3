import { __extends } from "tslib";
import { DeleteQualificationTypeRequest, DeleteQualificationTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteQualificationTypeCommand, serializeAws_json1_1DeleteQualificationTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>DeleteQualificationType</code>
 *             deletes a Qualification type and deletes any HIT types that are
 *             associated with the Qualification type.
 *         </p>
 *         <p>This operation does not revoke Qualifications already assigned
 *             to Workers because the Qualifications might be needed for active HITs.
 *             If there are any pending requests for the Qualification type, Amazon
 *             Mechanical Turk rejects those requests. After you delete a
 *             Qualification type, you can no longer use it to create HITs or HIT
 *             types.</p>
 *         <note>
 *             <p>DeleteQualificationType must wait for all the HITs that use
 *                 the deleted Qualification type to be deleted before completing. It
 *                 may take up to 48 hours before DeleteQualificationType completes and
 *                 the unique name of the Qualification type is available for reuse with
 *                 CreateQualificationType.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DeleteQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteQualificationTypeCommand = /** @class */ (function (_super) {
    __extends(DeleteQualificationTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteQualificationTypeCommand(input) {
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
    DeleteQualificationTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "DeleteQualificationTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteQualificationTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteQualificationTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteQualificationTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteQualificationTypeCommand(input, context);
    };
    DeleteQualificationTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteQualificationTypeCommand(output, context);
    };
    return DeleteQualificationTypeCommand;
}($Command));
export { DeleteQualificationTypeCommand };
//# sourceMappingURL=DeleteQualificationTypeCommand.js.map