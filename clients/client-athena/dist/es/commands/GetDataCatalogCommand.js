import { __extends } from "tslib";
import { GetDataCatalogInput, GetDataCatalogOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetDataCatalogCommand,
  serializeAws_json1_1GetDataCatalogCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the specified data catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetDataCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataCatalogCommandInput} for command's `input` shape.
 * @see {@link GetDataCatalogCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataCatalogCommand = /** @class */ (function (_super) {
  __extends(GetDataCatalogCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDataCatalogCommand(input) {
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
  GetDataCatalogCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "GetDataCatalogCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDataCatalogInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataCatalogOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDataCatalogCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetDataCatalogCommand(input, context);
  };
  GetDataCatalogCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetDataCatalogCommand(output, context);
  };
  return GetDataCatalogCommand;
})($Command);
export { GetDataCatalogCommand };
//# sourceMappingURL=GetDataCatalogCommand.js.map
