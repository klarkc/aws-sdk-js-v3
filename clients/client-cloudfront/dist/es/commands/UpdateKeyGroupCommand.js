import { __extends } from "tslib";
import { UpdateKeyGroupRequest, UpdateKeyGroupResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateKeyGroupCommand,
  serializeAws_restXmlUpdateKeyGroupCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a key group.</p>
 * 		       <p>When you update a key group, all the fields are updated with the values provided in
 * 			the request. You cannot update some fields independent of others. To update a key
 * 			group:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Get the current key group with <code>GetKeyGroup</code> or
 * 					<code>GetKeyGroupConfig</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the key group that you want to update. For
 * 					example, add or remove public key IDs.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including
 * 					the fields that you modified and those that you didn’t.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateKeyGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateKeyGroupCommand = /** @class */ (function (_super) {
  __extends(UpdateKeyGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateKeyGroupCommand(input) {
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
  UpdateKeyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateKeyGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateKeyGroupResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateKeyGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateKeyGroupCommand(input, context);
  };
  UpdateKeyGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateKeyGroupCommand(output, context);
  };
  return UpdateKeyGroupCommand;
})($Command);
export { UpdateKeyGroupCommand };
//# sourceMappingURL=UpdateKeyGroupCommand.js.map
