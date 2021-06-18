import { __extends } from "tslib";
import { AttachObjectRequest, AttachObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AttachObjectCommand,
  serializeAws_restJson1AttachObjectCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an existing object to another object. An object can be accessed in two
 *       ways:</p>
 *          <ol>
 *             <li>
 *                <p>Using the path</p>
 *             </li>
 *             <li>
 *                <p>Using <code>ObjectIdentifier</code>
 *                </p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AttachObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new AttachObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachObjectCommandInput} for command's `input` shape.
 * @see {@link AttachObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachObjectCommand = /** @class */ (function (_super) {
  __extends(AttachObjectCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AttachObjectCommand(input) {
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
  AttachObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "AttachObjectCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AttachObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachObjectResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AttachObjectCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AttachObjectCommand(input, context);
  };
  AttachObjectCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AttachObjectCommand(output, context);
  };
  return AttachObjectCommand;
})($Command);
export { AttachObjectCommand };
//# sourceMappingURL=AttachObjectCommand.js.map
