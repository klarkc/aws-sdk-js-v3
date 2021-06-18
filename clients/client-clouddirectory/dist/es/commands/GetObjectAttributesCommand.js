import { __extends } from "tslib";
import { GetObjectAttributesRequest, GetObjectAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetObjectAttributesCommand,
  serializeAws_restJson1GetObjectAttributesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves attributes within a facet that are associated with an object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetObjectAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetObjectAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link GetObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetObjectAttributesCommand = /** @class */ (function (_super) {
  __extends(GetObjectAttributesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetObjectAttributesCommand(input) {
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
  GetObjectAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "GetObjectAttributesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetObjectAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetObjectAttributesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetObjectAttributesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetObjectAttributesCommand(input, context);
  };
  GetObjectAttributesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetObjectAttributesCommand(output, context);
  };
  return GetObjectAttributesCommand;
})($Command);
export { GetObjectAttributesCommand };
//# sourceMappingURL=GetObjectAttributesCommand.js.map
