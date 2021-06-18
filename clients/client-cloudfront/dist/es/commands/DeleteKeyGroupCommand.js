import { __extends } from "tslib";
import { DeleteKeyGroupRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteKeyGroupCommand,
  serializeAws_restXmlDeleteKeyGroupCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a key group.</p>
 * 		       <p>You cannot delete a key group that is referenced in a cache behavior. First update
 * 			your distributions to remove the key group from all cache behaviors, then delete the key
 * 			group.</p>
 * 		       <p>To delete a key group, you must provide the key group’s identifier and version. To get
 * 			these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or
 * 			<code>GetKeyGroupConfig</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKeyGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteKeyGroupCommand = /** @class */ (function (_super) {
  __extends(DeleteKeyGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteKeyGroupCommand(input) {
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
  DeleteKeyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeleteKeyGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteKeyGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeleteKeyGroupCommand(input, context);
  };
  DeleteKeyGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeleteKeyGroupCommand(output, context);
  };
  return DeleteKeyGroupCommand;
})($Command);
export { DeleteKeyGroupCommand };
//# sourceMappingURL=DeleteKeyGroupCommand.js.map
